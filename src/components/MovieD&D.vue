<template>
    <div class="container">
        <h1>Movie drag and drop</h1>

        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div 
                        class="card-body"
                        draggable="true"
                        @dragstart="onDragStart($event, 1)"
                        
                    >
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
                                <label class="forcod em-label">Duracion</label>
                                <input type="text" class="form-control" v-model="form.duration">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Anio de publicacion</label>
                                <input type="text" class="form-control" v-model="form.publication_date">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Categoría</label>
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
                    class="drop-zone"
                    @drop="onDrop($event, 1)"
                    @dragover.prevent
                    @dragenter.prevent
                >
                    <h3>Drop here</h3>
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
        onDragStart(event, id) {
            event.dataTransfer.setData('text/plain', id);
        },
        onDrop(event, id) {
            console.log('drop', id);
            //obtener el valor de los inputs del formulario
            let name = this.form.name;
            let director = this.form.director;
            let duration = this.form.duration;
            let publication_date = this.form.publication_date
            console.log(name, director, duration, publication_date);
        },
        onSubmit() {
            console.log(this.form);
        },
        onReset() {
            this.form = {
                name: '',
                director: '',
                duration: '',
                publication_date: '',
                }
        }
    },
};
</script>

<style scoped>
    .drop-zone {
    margin-bottom: 10px;
    padding: 10px;
    border: 2px dashed #ccc;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    height: 200px;
    }
</style>