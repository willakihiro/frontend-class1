package br.com.linkedin

abstract class Experience {
    Date start
    Date end

    static belongsTo = [belongs: People]

    static constraints = {
        start nullable: true
        end nullable: true
    }
}
