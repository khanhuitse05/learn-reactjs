import { Form, useParams } from "react-router-dom";
import { getContact } from "../api/api"
import { useQuery } from "@tanstack/react-query";
import { Contact } from "../api/model/contact";

export default function ContactPage() {

  // get contact id from path
    const { contactId } = useParams();
    if(!contactId) {
        return <span>Invalid Contact id</span>
    }
    const id = parseInt(contactId);
    return <ContactOfUser id={id} />;
}

function ContactOfUser({id}: {id: number}) {

    const { data, isLoading, isError, error} = useQuery({ 
        queryKey: ['item', id], 
        queryFn: () => getContact(id)
    })
    if (isLoading) return <span>Loading...</span>
    if (isError) return <span>Error: {error.message}</span>
    const contact = data as Contact;

    return (
        <div id="contact">
            <div>
                <img
                    key={contact.id}
                    src={`https://robohash.org/${contact.id}.png?size=200x200`}
                    alt="Avatar"
                />
            </div>
            <div>
                <h1>
                    {contact.first} {contact.last}
                    <Favorite contact={contact} />
                </h1>
                {contact.twitter && (
                    <p>
                        <a href={`https://twitter.com/${contact.twitter}`}>
                            @{contact.twitter}
                        </a>
                    </p>
                )}
                {contact.notes && <p>{contact.notes}</p>}
            </div>
            <div>
                <Form 
                    method="post" 
                    action="destroy"
                    onSubmit={(event) => {
                        //
                    }}
                > 
                <button type="submit">Delete</button>
                </Form>
            </div>
        </div>
    );
}

function Favorite({contact}: any) {
    const favorite = contact.favorite;
    return (
        <button
            type="button"
            value={favorite ? "false" : "true"}
            aria-label={
                favorite
                    ? "Remove from favorites"
                    : "Add to favorites"
            }
        >
            {favorite ? "Unfavorite" : "Favorite"}
        </button>
    );
}