export const TableUserComp = ({ user }) => {
    return (
        <table>
            <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
            </tr>
            {
                user.map((item, idx) => {
                    return(
                        <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    )
                })
            }
        </table>
    )
}