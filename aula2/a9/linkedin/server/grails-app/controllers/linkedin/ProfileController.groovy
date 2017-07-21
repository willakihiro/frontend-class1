package linkedin

import br.com.linkedin.People
import grails.rest.RestfulController


class ProfileController extends RestfulController {

    ProfileController() {
        super(People)
    }

    def filter() {
        respond People.findAllByNameIlike("%"+params.id+"%")
    }

    def check(People p) {
        People people = p;
        respond People.findByEmailAndPassword(people.email,people.password)
    }
}