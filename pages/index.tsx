import Container from "../components/container";
import fetch from "isomorphic-fetch";
import Users from "../components/users";

const Index: any = (props) => {
  return (
    <Container>
      <h1>Next</h1>
      <Users users={props.users} />
    </Container>
  );
};

Index.getInitialProps = async (ctx: any) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return { users: data };
};

export default Index;
