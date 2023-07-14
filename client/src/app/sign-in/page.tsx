import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <div className='sign-in-up'>
      <div className='container'>
        <div className='sign-in-up-inner'>
          <SignIn redirectUrl={'/'} />
        </div>
      </div>
    </div>
  );

export default SignInPage;