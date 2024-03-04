<template>
    <div class="container">
        <h1>Movie drag and drop</h1>

        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <!-- Form -->
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
                                <label class="form-label">Duracion</label>
                                <input type="text" class="form-control" v-model="form.duration">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Anio de publicacion</label>
                                <input type="text" class="form-control" v-model="form.publication_date">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Categori­a</label>
                                <select class="form-select" aria-label="Default select example" v-model="form.gender">
                                    <option selected>Selecciona una...</option>
                                    <option v-for="item in gender" :value="item">{{ item.gender }}</option>
                                </select>
                                <hr>
                                <button type="reset" class="btn btn-danger mx-2">Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <!-- Drop zone  -->
                <div
                    class="dropzone"
                    @dragover.prevent
                    @drop="onDrop"
                    
                >

                </div>
            </div>
        </div>

    </div>
</template>

<script>
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

    },

    methods: {

    },
};
</script>

<style scoped></style>