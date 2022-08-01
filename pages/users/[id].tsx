import { useRouter } from "next/router";
import fetch from "isomorphic-fetch";
import Container from "../../components/container";

const User = ({ user }: any) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Container>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <div className="card-header">
                  <h3>User Name {id}</h3>
                </div>
                <div className="card-body">
                  <p>email: User Email {id}</p>
                  <p>phone: User Phone {id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

User.getInitialProps = async (ctx: any) => {
  const { id } = ctx.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const resJSON = await res.json();
  return { user: resJSON.data };
};

export default User;
