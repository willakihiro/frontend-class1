package linkedin

import br.com.linkedin.Academicxp
import br.com.linkedin.People
import grails.rest.RestfulController

class AcademicController extends RestfulController {

    AcademicController() {
        super(Academicxp)
    }

    def people() {
        respond Academicxp.findAllByBelongs(People.get(params.id))
    }

}
