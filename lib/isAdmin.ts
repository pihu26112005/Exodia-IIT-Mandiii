const isAdmin = ( userId: string ) => {
    return userId === process.env.NEXT_PUBLIC_ADMIN;
}

export default isAdmin;