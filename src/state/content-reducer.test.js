import contentReducer, {addPostActionCreator, deletePost} from "./content-reducer";


const state = {
    postsData: [
        { id: 1, message: "Hi, how are you?", likesCount: 1 },
        { id: 2, message: "It's my first post", likesCount: 2 },
        { id: 3, message: "It's my second post", likesCount: 1 },
        { id: 4, message: "So, my posts are very interesting", likesCount: 29 }
    ]
};

it('length of posts should be incremented', function () {
    // 1. test data
    const action = addPostActionCreator("New post");

    // 2. action
    const newState = contentReducer(state, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(3);
});

it('message of new post should be New post', function () {
    // 1. test data
    const action = addPostActionCreator("New post");

    // 2. action
    const newState = contentReducer(state, action);

    // 3. expectation
    expect(newState.postsData[2].message).toBe("New post");
});

it('length of posts should be decremented after deleting', function () {
    // 1. test data
    const action = deletePost(2);

    // 2. action
    const newState = contentReducer(state, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(3);
});

it('message of last post should be "My posts are very Interesting"', function () {
    // 1. test data
    const action = deletePost(2);

    // 2. action
    const newState = contentReducer(state, action);

    // 3. expectation
    expect(newState.postsData[2].message).toBe("So, my posts are very interesting");
});












