import './myPosts.css';
import { addPostActionCreator } from "../../../state/content-reducer";
import { connect } from "react-redux";
import MyPosts from "./myPosts";

const mapStateToProps = (state) => {
    return {
        postsData: state.contentPage.postsData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: (value) => dispatch(addPostActionCreator(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);

















