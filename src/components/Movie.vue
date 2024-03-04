<template>
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Peliculas</a>
                            <a class="nav-link active" aria-current="page" href="/peliculas2">Peliculas drag and drop</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <h1 class="title mt-5">Peliculas App</h1>
            <div class="moda">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary open-modal mb-5" data-bs-toggle="modal"
                    data-bs-target="#exampleModal" on-click="onReset">
                    Agregar pelicula
                </button>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="alert alert-danger my-alert" role="alert" v-if="errors.length > 0">
                        <ol>
                            <li v-for="err in errors">
                                {{ err }}
                            </li>
                        </ol>
                    </div>
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Agregar pelicula</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form @submit="onSubmit" @reset="onReset">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Nombre</label>
                                        <input type="text" class="form-control" id="name" v-model="form.name">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Director</label>
                                        <input type="text" class="form-control" v-model="form.director">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Duración</label>
                                        <input type="text" class="form-control" v-model="form.duration">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Anio de publicacion</label>
                                        <input type="text" class="form-control" v-model="form.publication_date">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Categori�a</label>
                                        <select class="form-select" aria-label="Default select example"
                                            v-model="form.gender">
                                            <option selected>Selecciona una...</option>
                                            <option v-for="item in gender" :value="item">{{ item.gender }}</option>
                                        </select>
                                        <hr>
                                        <button type="submit" class="btn btn-primary">Agregar</button>
                                        <button type="reset" class="btn btn-danger mx-2">Reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Filter -->

            <div class="input-group mb-3">
                <form @submit="onSearch">
                    <select class="form-select" id="inputGroupSelect01">
                        <option selected class="select">Buscar por...</option>
                        <option value="nombre">Nombre</option>
                        <option value="director">Director</option>
                        <option value="anio">Anio de publicacion</option>
                        <option value="categoria">Categoria</option>
                    </select>
                    <!-- Segun el value que seleccione, es el input por     el que va a buscar -->
                    <input type="text" class="form-control" placeholder="Buscar..." aria-label="Buscar..."
                        aria-describedby="button-addon2">

                    <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Buscar</button>
                </form>
            </div>

            <div class="loader mt-5">
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
            <div class="cards">
                <div class="card" style="width: 18rem;" v-for="item of data">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ item.duration }}</h6>
                        <p class="card-text">Diricted by {{ item.director }}</p>
                        <p class="card-text">Anio de publicacion {{
                            new Date(item.publication_date).getFullYear()
                        }}</p>
                        <div class="my-buttons">
                            <button class="btn btn-danger" @click="deleteMovieA(item.id)">Eliminar</button>
                            <button type="button" class="btn btn-primary open-modal" data-bs-toggle="modal"
                                data-bs-target="#updateModal" @click="getMovie(item.id)">
                                Editar pelicula
                            </button>
                            <!-- Modal -->
                            <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="alert alert-danger my-alert" role="alert" v-if="errors.length > 0">
                                    <ol>
                                        <li v-for="err in errors">
                                            {{ err }}
                                        </li>
                                    </ol>
                                </div>
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Actualizar pelicula</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form @submit="onSubmitUpdate" @reset="onReset">
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label">Nombre</label>
                                                    <input type="text" class="form-control" id="name"
                                                        v-model="toUpdate.name">
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Director</label>
                                                    <input type="text" class="form-control" v-model="toUpdate.director">
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Duracion</label>
                                                    <input type="text" class="form-control" v-model="toUpdate.duration">
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Fecha de publicacion</label>
                                                    <input type="date" class="form-control"
                                                        v-model="toUpdate.publication_date">
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Categoria</label>
                                                    <select class="form-select" aria-label="Default select example"
                                                        v-model="toUpdate.gender">
                                                        <option selected>Selecciona una...</option>
                                                        <option v-for="item in gender" :value="item">{{ item.gender }}
                                                        </option>
                                                    </select>
                                                    <hr>
                                                    <button type="submit" class="btn btn-primary">Actualizar</button>
                                                    <button type="reset" class="btn btn-danger mx-2">Reset</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import moviesService from '../service/Movie'

export default {
    data() {
        return {
            form: {
                name: '',
                director: '',
                duration: '',
                publication_date: '',
                gender: {
                    id: '',
                    gender: ''
                }
            },
            errors: [],
            data: [],
            gender: [],
            toUpdate: []
        }
    },
    mounted() {
        this.getMovies()
        this.getGender()
        this.getMovie()
    },
    methods: {
        onSubmit: function (e) {
            this.errors = []
            Object.entries(this.form).forEach((key) => {
                if (key[1] === "") {
                    this.errors.push("El campo " + key + " es requerido")
                }
            })
            if (!this.validateDuration(this.form.duration) && this.form.duration !== "") {
                this.errors.push("El formato de la duracion es incorrecto, debe ser en formato 00:00")
            }
            if (this.errors.length === 0) {
                const loader = document.querySelector('.loader')
                const newData = {
                    name: this.form.name,
                    director: this.form.director,
                    duration: this.form.duration,
                    publication_date: this.form.publication_date,
                    gender: {
                        id: this.form.gender.id,
                        gender: this.form.gender.gender
                    }
                }
                this.addMovie(newData)
                loader.style.display = 'none'
            }
            e.preventDefault()
        },
        onReset: function () {
            this.errors = []
            this.form = {
                name: '',
                director: '',
                duration: '',
                gender: {
                    id: '',
                    gender: ''
                }
            }
        },
        onSearch: function (e) {
            //mostrar el valor del select
            console.log(e.target[0].value)
            const value = e.target[0].value
            //mostrar el valor del input
            console.log(e.target[1].value)
            const input = e.target[1].value
            e.preventDefault()
        },
        onSubmitUpdate: function (e) {
            this.errors = []
            Object.entries(this.toUpdate).forEach((key) => {
                if (key[1] === "") {
                    this.errors.push("El campo " + key + " es requerido")
                }
            })
            if (!this.validateDuration(this.toUpdate.duration) && this.toUpdate.duration !== "") {
                this.errors.push("El formato de la duracion es incorrecto, debe ser en formato 00:00")
            }
            if (this.errors.length === 0) {
                const loader = document.querySelector('.loader')
                const newData = {
                    name: this.toUpdate.name,
                    director: this.toUpdate.director,
                    duration: this.toUpdate.duration,
                    publication_date: this.toUpdate.publication_date,
                }
                this.updateMovie(this.toUpdate.id, newData)
                loader.style.display = 'none'
            }
            e.preventDefault()
        },
        validateDuration: function (duration) {
            var re = /^\d{1,2}:\d{2}([ap]m)?$/;
            return re.test(duration);
        },
        async getMovies() {
            try {
                const loader = document.querySelector('.loader')
                const data = await moviesService.getMovies()
                this.data = data.data.data
                if (this.data.length > 0) {
                    loader.style.display = 'none'
                }
            } catch (err) {
                console.log(err)
            }
        },
        async addMovie(newData) {
            try {

                const response = await moviesService.saveMovie(newData)
                console.log(response)
                location.reload()
                this.getMovies()
            } catch (err) {
                console.log(err)
            }
        },
        async getMovie(id) {
            try {
                const data = await moviesService.getMovie(id)
                const date = new Date(data.data.data.publication_date)
                const newDate = format(date, "short")
                const newData = {
                    name: data.data.data.name,
                    director: data.data.data.director,
                    duration: data.data.data.duration,
                    publication_date: new Date(newDate).toISOString().split('T')[0],
                }
                this.toUpdate = newData
                console.log(this.toUpdate)
            } catch (err) {
                console.log(err)
            }
        },
        async getGender() {
            try {
                const data = await moviesService.getGender()
                this.gender = data.data.data
            } catch (err) {
                console.log(err)
            }
        },
        deleteMovieA(id) {
            try {
                Swal.fire({
                    title: "Estas seguro?",
                    text: "No podras revertir esta acci�n!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "S�, eliminar!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.deleteMovie(id)
                        Swal.fire({
                            title: "Pelicula eliminada!",
                            text: "La peli ha sido eliminada.",
                            icon: "success"
                        });
                    }
                });
            } catch (err) {
                console.log(err)
            }
        },
        async deleteMovie(id) {
            try {
                const loader = document.querySelector('.loader')
                const response = await moviesService.deleteMovie(id)
                this.getMovies()
                loader.style.display = 'none'
            } catch (err) {
                console.log(err)
            }
        },
        async updateMovie(id, newData) {
            try {
                const response = await moviesService.updateMovie(id, newData)
                console.log(response)
                reload()
            } catch (err) {
                console.log(err)
            }
        },
    }
}

</script>

<style scoped>
.title {
    text-align: center;
}

.moda {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}

.cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin: 0 auto;
}

.my-alert {
    width: 20rem;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: -3rem;
}

.my-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
}
</style>