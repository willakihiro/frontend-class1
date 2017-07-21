package linkedin

class UrlMappings {

    static mappings = {
        delete "/$controller/$id(.$format)?"(action:"delete")
        get "/$controller(.$format)?"(action:"index")
        get "/$controller/$id(.$format)?"(action:"show")
        post "/$controller(.$format)?"(action:"save")
        put "/$controller/$id(.$format)?"(action:"update")
        patch "/$controller/$id(.$format)?"(action:"patch")

        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
        "/academic/people/$id"(controller: 'academic', action:'people', method: 'GET')
        "/professional/people/$id"(controller: 'professional', action:'people', method: 'GET')
        "/profile/filter/$id"(controller: 'profile', action:'filter', method: 'GET')
        "/profile/check(.$format)?"(controller: 'profile', action: 'check', method: 'POST')
        "/news/person/$id"(controller: 'update', action: 'people', method: 'GET')
        "/news/all"(controller: 'update', action: 'all', method: 'GET')

    }
}
