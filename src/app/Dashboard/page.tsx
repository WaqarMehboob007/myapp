
import Link from "next/link";
const Dashboard = () => {
    return(
        <div>
            <Link href= "/Dashboard/Settings">Setting</Link>
            <Link href= "/Dashboard/Analytics">Analytics</Link>


            <div>   Hello I am Dashboard Page  </div>

        </div>
    )
}
export default Dashboard;