package br.com.linkedin

import grails.rest.Resource

@Resource(uri='/professional',readOnly = false, formats = ['json', 'xml'])
class Professionalxp extends Experience {

    String level

    static mapping = {
        discriminator "PROFESSIONAL"
    }
}