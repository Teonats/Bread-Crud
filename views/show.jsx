const React = require('react')
const Default = require('./layouts/default')

function Show({ bread, index }) {
    console.log(bread)
    return (
        <Default>
            <h2>Show Page</h2>
            <h3>{bread.name}</h3>
            <p>
                and it 
                {
                    bread.hasGluten 
                    ? <spam> does </spam>
                    : <span> does not </span>
                
                }
                have gluten 
            </p>
            <p>{bread.getBakedBy()}</p>
            <img src={bread.image} alt={bread.name} />
            <a href={`/breads/${bread.id}/edit`}>
                <button>Edit</button>
                </a>
            <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
              <input type='submit' value="DELETE"/>
            </form>

        </Default>
    )
}

module.exports = Show