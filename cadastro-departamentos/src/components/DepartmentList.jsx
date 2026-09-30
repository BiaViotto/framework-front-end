import React from 'react'

function DepartmentList({ departments }) {
  return (
    <div>
      <h2>Departamentos cadastrados</h2>

      {departments.length === 0 ? (
        <p>Nenhum departamento cadastrado.</p>
      ) : (
        <ul>
          {departments.map((department) => (
            <li key={department.id}>
              <strong>{department.name}</strong> — {department.acronym}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DepartmentList