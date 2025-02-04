export const Form = () => {
    return(
        <div className="text-black p-6 bg-sky-300 rounded-md">
            <div className="flex justify-between text-4xl mb-6 font-medium">
                <h1 className="">Create Account</h1>
                <p>🔙</p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
                <div className="flex flex-col">
                    <p>First name</p>
                    <input className="rounded-md px-4 h-10" type="text" placeholder="Fulano"/>
                </div>
                <div className="flex flex-col">
                    <p>Last Name</p>
                    <input className="rounded-md px-4 h-10" type="text" placeholder="De Tal"/>
                </div>
                <div className="flex flex-col">
                    <p>Birth</p>
                    <input className="rounded-md px-4 h-10" type="text" placeholder="dd/mm/yyyy"/>
                </div>
                <div className="flex flex-col">
                    <p>E-mail</p>
                    <input className="rounded-md px-4 h-10"  type="text" placeholder="example@gmail.com"/>
                </div>
                <div className="flex flex-col">
                    <p>Password</p>
                    <input className="rounded-md px-4 h-10" type="password" placeholder="aaa"/>
                </div>
                <div className="flex flex-col">
                    <p>Confirm password</p>
                    <input className="rounded-md px-4 h-10" type="password" placeholder="aaa"/>
                </div>
            </div>

            <div className="mb-6">
                <p>Gender</p>
                <div>
                    <input type="checkbox" name=""id="" /> Female
                    <input type="checkbox" name="" id="" /> Male
                    <input type="checkbox" name="" id="" /> Other
                </div>
            </div>
            <div className="flex text-white text-lg bg-slate-600 items-center justify-center py-3 rounded-md">
                <button>✔️Create Account</button>
            </div>
        </div>
    )
}