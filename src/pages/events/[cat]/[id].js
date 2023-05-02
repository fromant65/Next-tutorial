import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
const DinamycEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;
    try {
      //POST fetch-req
      //Body: emailValue & eventId
      const res = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: emailValue,
          eventId: eventId,
        }),
      });
      if (!res.ok) throw new Error(`Error ${res.status}`);
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <div>
        <Image src={data.image} alt={data.title} width={500} height={500} />
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Get Registered for this event</label>
          <input
            ref={inputEmail}
            type="email"
            id="email"
            placeholder="Insert your email"
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DinamycEvent;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("/data/data.json");
  const id = context.params.id;
  const eventData = allEvents.find((ev) => ev.id === id);
  return {
    props: {
      data: eventData,
    },
  };
}
