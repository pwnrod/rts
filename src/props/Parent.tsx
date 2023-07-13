import { Child } from "./Child";

const Parent = () => {
    return (
        <Child
            color="green"
            onClick={() => {
                console.log("clicked");
            }}
        >
            <div>Oh hai</div>
        </Child>
    );
};

export default Parent;
