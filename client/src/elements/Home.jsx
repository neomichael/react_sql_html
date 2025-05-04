import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
    const [data, setData] = useState([])
    const [deleted, setDeleted] = useState(true)
    useEffect(()=>{
        if(deleted){
            setDeleted(false)
        axios.get('/students')
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>console.log(err))
    }
    }, [deleted])

    function handleDelete(id){
        axios.delete(`/delete/${id}`)
        .then((res)=>{
            setDeleted(true)
        })
        .catch((err)=> console.log(err))
    }
  return (
    // <div className='container-fluid bg-primary vh-100 vw-100'>
    <body className={styles.appFrame}>
        <div className={styles.appFrame__container}>
            <h3 className={styles.appFrame__head}>Students</h3>
            <div className='d-flex justify-content-end'>
                <Link className='btn btn-success' to='/create'>Add Student</Link>
            </div>
            <table className={styles.appFrame__table}>
                <thead className={styles.appFrame__table}>
                    <tr className={styles.appFrame__table}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className={styles.appFrame__table}>
                    {
                        data.map((student)=>{
                            return (<tr className={styles.appFrame__table}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.age}</td>
                                <td>{student.gender}</td>
                                <td>
                                    <Link className='btn mx-2 btn-success' to={`/read/${student.id}`}>Read</Link>
                                    <Link className='btn mx-2 btn-success' to={`/edit/${student.id}`}>Edit</Link>
                                    <button onClick={()=>handleDelete(student.id)} className='btn mx-2 btn-danger'>Delete</button>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    </body>
  )
}

export default Home