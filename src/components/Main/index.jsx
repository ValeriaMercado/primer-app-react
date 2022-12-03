export const Main = () =>{

    const user = {
        name: "Valeria",
        age: 29
    }

    const styles = {
        color: "pink"
    }
    return (
        <>
        <h1 style={styles}>{user.name} tiene {user.age} anios</h1>
        </>
    )
}