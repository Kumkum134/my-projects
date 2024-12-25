import React from "react";

const AdminHome = () => {
    return (
        <div>
            <div className='h-screen w-40 bg-black text-white text-center'>
                <p>LIBRARY</p>
                <div>
                    <button>Dashboard</button>
                    <button>Catalog</button>
                    <button>Books</button>
                    <button>Users</button>
                    <button>Branches</button>
                </div>
                <button>Log Out</button>
            </div>
        </div>
    );
}
export default AdminHome;