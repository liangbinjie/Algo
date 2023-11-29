import { Container, Card } from "react-bootstrap";
import { supabase } from "../client";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";


const Dashboard = () => {

    useEffect(() => {
        fetch();
      }, []);
    
    const [newTask, setNewTask] = useState("");
    const { user } = useAuth();
    const [tasksArray, setTasks] = useState([]);
    
    const addTask = async (task) => {
        console.log(user);
        let { data: tasks, error } = await supabase
            .from("tasks")
            .insert([{ description: task,
                owner: user.id,
                done: false}]);
        if (error) console.log("error", error);
        else console.log("tasks", tasks);
        fetch();
        alert("Task added")
    }

    const fetch = async () => {
        let { data: tasks, error } = await supabase.from("tasks").select("*").eq("owner", user.id);
        if (error) console.log("error");
        else console.log("tasks", tasks);
        setTasks(tasks);
        console.log(tasksArray);
    }

    return (
        <Container className="mt-5">
            <h2>Dashboard</h2>
            <div className="row g-3 bg-dark-subtle p-4 mt-4" onSubmit={() => fetch()}>
                <div className="mb-3">
                    <label htmlFor="task" className="form-label fw-bold">Add new task</label>
                    <textarea className="form-control mb-3" id="task" rows="3" value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}></textarea>
                    <button className="btn btn-bnw" onClick={() => addTask(newTask)}>Add</button>
                    {/* <button className="btn btn-bnw" onClick={fetch}>ver</button> */}
                </div>
            </div>

            <hr />

            {tasksArray.map((task) => (
                <div className="py-2">
                    <Card>
                        <div className="card-body">
                            {task.description}
                        </div>
                        <hr />
                        <button className="btn btn-bnw">Done</button>
                    </Card>
                </div>
            ))}


        </Container>
    );
}

export default Dashboard;
