import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className='sign-in-up'>
      <div className='container'>
        <div className='sign-in-up-inner'>
          <SignUp />
        </div>
      </div>
    </div>
  )
}