export let Batch = () => {
    const students = ["yash", "Amit", "Rahul"];
     
    return (
        <>
        <h1>How many stydents are there?</h1>
        <Coordinator studentList={students} />
        </>
    );

};

let Coordinator = (props) => {
    console.log(props);
    return (
        <>
        <h3>Students: {props.studentList[0]}</h3>
         <h3>Students: {props.studentList[1]}</h3>
          <h3>Students: {props.studentList[2]}</h3>
        </>
    );
};