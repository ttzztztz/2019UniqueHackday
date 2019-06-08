from json import dump, load
import pdb
import jieba


class Predictor():
    def __init__(self, filename='', *args, **kwargs):
        with open(filename, 'r') as fh:
            self.tfidfs = load(fh)

    def load_file(self, train_x, train_y, filename, t):
        with open(filename, 'r', encoding='utf-8') as fh:
            lines = list(fh.readlines())
            train_x.extend([list(jieba.cut(l, cut_all=True)) for l in lines])
            train_y.extend([str(t)] * len(lines))

    def computeTF(self, wordDict, bow):
        tfDict = {}
        bowCount = len(bow)
        for word, count in wordDict.items():
            tfDict[word] = count/float(bowCount)
        return tfDict

    def computeIDF(self, docList):
        import math
        idfDict = {}
        N = len(docList)

        idfDict = dict.fromkeys(docList[0].keys(), 0)
        for doc in docList:
            for word, val in doc.items():
                if val > 0:
                    idfDict[word] += 1

        for word, val in idfDict.items():
            idfDict[word] = math.log10(N / float(val))

        return idfDict

    def computeTFIDF(self, tfBow, idfs):
        tfidf = {}
        for word, val in tfBow.items():
            tfidf[word] = val*idfs[word]
        return tfidf

    def train(self, filename):
        train_x, train_y = [], []
        self.load_file(train_x, train_y, 'suicide.txt', 2)
        neg_len = len(train_x)
        self.load_file(train_x, train_y, 'pre_suicide.txt', 1)
        self.load_file(train_x, train_y, 'non_suicide.txt', 0)

        word_set = set()
        for f in train_x:
            word_set |= set(f)
        wcs = []
        tfs = []
        for f in train_x:
            wc = dict.fromkeys(word_set, 0)
            for w in f:
                wc[w] = wc[w]+1
            wcs.append(wc)
            tfs.append(self.computeTF(wc, f))
        idfs = self.computeIDF(wcs)
        tfidfs = [self.computeTFIDF(tfs[i], idfs) for i in range(len(tfs))]

        imp = dict.fromkeys(word_set, 0)
        for w in imp.keys():
            for i in range(neg_len):
                imp[w] += tfidfs[i][w]
            imp[w] /= neg_len

        with open(filename, 'w') as fh:
            dump(imp, fh)
        return imp

    def predict(self, text):
        ws = list(jieba.cut(text, cut_all=True))
        text_wc = {}
        for w in ws:
            if w not in text_wc:
                text_wc[w] = 1
            else:
                text_wc[w] = text_wc[w]+1
        score = 0
        for w in text_wc.keys():
            score += text_wc[w]/len(ws) * self.tfidfs.get(w, 0)
        if score > 0.015:
            return 2
        elif score > 0.001:
            return 1
        else:
            return 0


if __name__ == "__main__":
    p = Predictor('./model')
    print(p.predict("想要自杀，不想活了"))
    print(p.predict("想要跳楼"))
    print(p.predict("好开心阿"))
    print(p.predict("感觉有点难受，有点惨"))
