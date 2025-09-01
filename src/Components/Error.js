import { useRouteError } from "react-router"

const Error = () => {
    const err=useRouteError();
  return (
    <div>
        <h2>OOPS! Something is Wrong.</h2>
        <br/>
        <p>{err.status} : {err.statusText}</p>
        <br/>
    </div>
  )
}

export default Error