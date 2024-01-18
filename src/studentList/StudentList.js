
const StudenList = ()=> {
    const students = [
        {id: 1, firname: "ana", lastname: "perez"},
        {id: 2, firname: "pedro", lastname: "perez"},
        {id: 3, firname: "juan", lastname: "perez"},
        {id: 4, firname: "andres", lastname: "perez"}
]


const genStudentList = () =>{
    const list=[];
    for(const student of students){
        list.push(<p>{`${student.id} ${student.firname} ${student.lastname}`}</p>) 
    }
    return list;
}

return (
    <>
        {students.map((st)=>(<p>{`${st.firname} ${st.lastname}`}</p>))}
    </>
)
}

export default StudenList;