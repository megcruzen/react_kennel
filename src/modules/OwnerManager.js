const remoteURL = "http://localhost:5002"

export default {

    get(id) {
        return fetch(`${remoteURL}/owners/${id}`).then(response => response.json())
    },

    getAll() {
        return fetch(`${remoteURL}/owners?_embed=animals`).then(response => response.json())
    },

    removeAndList(id) {
        return fetch(`${remoteURL}/owners/${id}`, {
            method: "DELETE"
        })
        .then(() => this.getAll())
    },

    post(newOwner) {
        return fetch(`${remoteURL}/owners`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newOwner)
        })
        .then(data => data.json())
      }

}