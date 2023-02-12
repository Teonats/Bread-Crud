const React = require('react')
const Default = require('./layouts/default')

function Show({ bread }) {
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
            <img src={bread.image} alt={bread.name} />

        </Default>
    )
}

module.exports = Show