import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "./style";

import BlogItem from "../BlogItem";
import AvatarImg1 from "./1.jpg";
import AvatarImg2 from "./2.jpg";
import AvatarImg3 from "./3.jpg";

interface Props extends WithStyles {}

class RealTimeBlog extends React.PureComponent<Props> {
    render() {
        const { classes } = this.props;
        return (
            <>
                <BlogItem
                    date="2019/06/09"
                    author="旅行到世界尽头丶"
                    description="这个世界怎么能有我这么差劲的人存在"
                    avatar={AvatarImg1}
                />
                <BlogItem
                    date="2019/06/09"
                    author="旅行到世界尽头丶"
                    description="人活着就是为了来受罪吗"
                    avatar={AvatarImg1}
                />
                <BlogItem
                    date="2019/06/09"
                    author="BETTY2013在行动"
                    description="我每天都是很焦虑很煎熬"
                    avatar={AvatarImg2}
                />
                <BlogItem
                    date="2019/06/09"
                    author="BETTY2013在行动"
                    description="饭啊，我很快就会来找你了"
                    avatar={AvatarImg2}
                />
                <BlogItem
                    date="2019/06/09"
                    author="BETTY2013在行动"
                    description="有没有一种好的解脱方式"
                    avatar={AvatarImg2}
                />
                <BlogItem
                    date="2019/06/09"
                    author="Cheery小美女 "
                    description="每天都活在痛苦和焦虑中，这样活着还有意义吗？反复问自己有吗？也许是该离开了……"
                    avatar={AvatarImg3}
                />
            </>
        );
    }
}

export default withStyles(styles)(RealTimeBlog);
