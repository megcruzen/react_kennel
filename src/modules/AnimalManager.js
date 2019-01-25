const remoteURL = "http://localhost:5002"

export default {

    get(id) {
        return fetch(`${remoteURL}/animals/${id}`).then(data => data.json())
    },

    getAll() {
        // return fetch(`${remoteURL}/animals?_expand=owner`).then(data => data.json())
        return fetch(`${remoteURL}/animals?_expand=employee&_expand=owner`).then(data => data.json())
    },

    removeAndList(id) {
        return fetch(`${remoteURL}/animals/${id}`, {
            method: "DELETE"
        })
        .then(() => this.getAll())
    },

    post(newAnimal) {
        return fetch(`${remoteURL}/animals`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newAnimal)
        })
        .then(data => data.json())
      },

      edit(animalId, editedAnimal) {
        return fetch(`${remoteURL}/animals/${animalId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedAnimal)
        })
      }
}