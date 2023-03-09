import { ReactElement } from "react"
import { urlDTO } from "../../models/url.model";
import Loading from "../UI/Loading";

const UrlsList = (props: urlListProps) => {
    if (!props.list) {
        console.log("1");
        if (props.loadingUI) {
            return props.loadingUI;
        }
        return <Loading />
    } else if (props.list.length === 0) {
        console.log("2");
        if (props.emptyListUI) {
            return props.emptyListUI;
        }
        console.log("IN empty array");
        return <p>There are no elements to display</p>
    }
    else {
        console.log("3");
        return props.children;
    }
};

interface urlListProps {
    list: urlDTO[],
    loadingUI?: ReactElement,
    emptyListUI?: ReactElement,
    children: ReactElement
};

export default UrlsList;