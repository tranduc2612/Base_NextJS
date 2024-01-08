'use client'
import useSWR from 'swr'
import ListPost from "@/components/posts/ListPost";

function Home() {
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher)

    if (error) return <div>lỗi api</div>
    // nếu mà đã tạo 1 page loading bên ngoài rồi thì thôi dùng cái này, 
    // còn nếu dùng cái này thì bên ngoài ko còn tác dụng nữa ?
    // if (isLoading) return <div>Đang tải...</div>

    function fetcher() {
        return fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => json)
    }

    return (<main>
        <h1>Trang chủ</h1>
        <h2>Danh sách các bài viết</h2>
        <ListPost blogs={data} isLoading={isLoading} />
    </main>);
}

export default Home;