package linkedin

import br.com.linkedin.People
import br.com.linkedin.Professionalxp
import grails.rest.RestfulController


class ProfessionalController extends RestfulController {

    ProfessionalController() {
        super(Professionalxp)
    }

    def people() {
        respond Professionalxp.findAllByBelongs(People.get(params.id))
    }

}
