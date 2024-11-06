import { useParams } from "react-router-dom"

export function Recipe () {
    const {id} = useParams()

    return (
    <main className='container-fluid bg-secondary text-center'>
      <h1>Recipe: {id}</h1>
    </main>
    );
}