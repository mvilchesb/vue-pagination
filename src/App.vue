<template>
    <div>
        <div class="container p-4">
            <div class="row">
                <div class="col-md-4" v-for="article in displayedArticles" :key="article._id">
                    <div class="card mb-2">
                        <img :src="article.imageURL" class="card-img-top" />
                        <div class="card-body">
                            <h5>{{ article.title }}</h5>
                            <p>{{ article.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="btn-group col-md-2 offset-md-5">
                    <button
                        class="btn btn-sm btn-outline-secondary"
                        v-if="page != 1"
                        @click="page--"
                    >Before</button>

                    <button
                        class="btn btn-sm btn-outline-secondary"
                        v-for="pageNumber in pages.slice(page - 1, page + 5)"
                        :key="pageNumber"
                        @click="page = pageNumber"
                    >{{ pageNumber }}</button>

                    <button
                        class="btn btn-sm btn-outline-secondary"
                        v-if="page < pages.length"
                        @click="page++"
                    >Next</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            articles: [],
            baseURL: 'http://localhost:3002',
            page: 1,
            perPage: 10,
            pages: []
        }
    },

    created() {
        this.getArticles()
    },

    methods: {
        async getArticles() {
            const res = await this.axios.get(`${this.baseURL}/articles`)
            this.articles = res.data
        },

        paginate(articles) {
            let page = this.page
            let perPage = this.perPage
            let from = (page * perPage) - perPage
            let to = (page * perPage)
            return articles.slice(from, to)
        },

        setArticles() {
            let numberOfPages = Math.ceil(this.articles.length / this.perPage)

            for (let i = 1; i <= numberOfPages; i++) {
                this.pages.push(i)
            }
        }
    },

    computed: {
        displayedArticles() {
            return this.paginate(this.articles)
        }
    },

    watch: {
        articles() {
            this.setArticles()
        }
    }
}
</script>

<style>
</style>
