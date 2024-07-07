import { useQuery } from "@tanstack/react-query"
import { getContacts } from "../../api/api"
import { Outlet, Link } from "react-router-dom";

export default function RootPage() {
  const { data, isLoading, isError, error} = useQuery({ queryKey: ['items'], queryFn: getContacts })
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        {
            isLoading && <span>Loading...</span>
        }
        {
            isError && <span>Error: {error.message}</span>
        }
        {
           data && 
           <nav>
                <ul>
                    {
                        data.map((item: any) => (
                            <li key={item.id}>
                                <Link to={`/contacts/${item.id}`}>
                                   { <> {item.first} {item.last} </> } {item.favorite && <span>★</span>}
                                </Link>
                            </li>
                        ))
                  } 
                </ul>
            </nav>
        }
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}