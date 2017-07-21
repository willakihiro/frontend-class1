package linkedin

import br.com.linkedin.News
import br.com.linkedin.People
import grails.converters.JSON
import grails.rest.RestfulController

class UpdateController extends RestfulController {

    UpdateController() {
        super(News)
    }

    def people() {
        respond News.findAllByBelongs(People.get(params.id), [sort: 'lastUpdated', order: 'desc'])
    }

    def all() {
        def news =  News.findAll([sort: 'lastUpdated', order: 'desc'])
        render news as JSON
    }

}
