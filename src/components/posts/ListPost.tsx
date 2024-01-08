interface IProps {
    blogs: IBlog[],
    isLoading: boolean
}

function ListPost(props: IProps) {
    const { blogs, isLoading } = props;
    return (<ul>

        {isLoading ? <>Đang tải trang blog</> : blogs.map((blog: any) => {
            return <li key={blog.id}>
                {blog.title}
            </li>
        })}

    </ul>);
}

export default ListPost;