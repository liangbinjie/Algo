import { Container, Card } from "react-bootstrap";


const Dashboard = () => {
    return (
        <Container className="mt-5">
            <h2>Dashboard</h2>
            <form class="row g-3 bg-dark-subtle p-4 mt-4">
                <div class="mb-3">
                    <label for="task" class="form-label fw-bold">Add new task</label>
                    <textarea class="form-control mb-3" id="task" rows="3"></textarea>
                    <button type="submit" className="btn btn-bnw">Add</button>
                </div>
            </form>

            <hr />

            <div className="py-2">
                <Card>
                    <div class="card-body">
                        This is some text within a card body.
                    </div>
                    <hr />
                    <button className="btn btn-bnw">Done</button>
                </Card>
            </div>
            <div className="py-2">
                <Card>
                    <div class="card-body">
                        This is some text within a card body.
                    </div>
                    <hr />
                    <button className="btn btn-bnw">Done</button>
                </Card>
            </div>


        </Container>
    );
}

export default Dashboard;
