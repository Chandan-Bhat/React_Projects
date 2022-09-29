const Stuff = () => (
    <div>
        <h5>About:</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ornare congue. Vestibulum cursus ipsum dui, vel lacinia 
        sapien ornare vitae.</p>
    </div>
    );

const Intr = () => (
    <div>
        <h5>Intrests:</h5>
        <p>Suspendisse convallis egestas ex, sed dapibus sapien tempor sit amet. Fusce cursus lectus nec nisi mattis eleifend. Nulla neque 
        leo.</p>
    </div>
    );

function About() {
    return(
        <div className = "about">
            <Stuff />
            <Intr />
        </div>
    )
}

export default About;