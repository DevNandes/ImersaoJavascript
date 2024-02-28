# ABSTRACT: Aparecida Nutrição
#
# make help
#

.PHONY:  commit help

# target: commit - Executa 'git add .', 'git commit -a', 'git push branch'
commit:
	git add .
	git commit -a
	git push $(branch)
	git status


# target: help - Mostra os targets que sao executaveis
help:
	@egrep "^# target:" [Mm]akefile


# EOF

