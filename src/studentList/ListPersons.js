const ListPersons = () => {
    const persons = [
        {id: 1, firstName: "john", lastName: "lopez", edad: 36},
        {id: 2, firstName: "juan", lastName: "garcia", edad: 15},
        {id: 3, firstName: "ana", lastName: "ramires", edad: 19},
        {id: 4, firstName: "diego", lastName: "sachez", edad: 30},
        {id: 5, firstName: "pablo", lastName: "perez", edad: 20},
        {id: 6, firstName: "dario", lastName: "romero", edad: 12},
    ]


return(
    <>
        {
             <div className="container">
             <table border={2}>
                 <thead>
                     <tr>
                         <th>id</th>
                         <th>firname</th>
                         <th>lastName</th>
                         <th>edad</th>
                     </tr>
                 </thead>
             </table>
             </div>
        }
        {
            persons.filter((st) =>st.edad >= 18).map((st)=> <div className="container">
            <table border={2}>
                <tbody>
                    <tr>
                        <td>{st.id}</td>
                        <td>{st.firstName}</td>
                        <td>{st.lastName}</td>
                        <td>{st.edad}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            )
        }
    </>
)
}

export default ListPersons;