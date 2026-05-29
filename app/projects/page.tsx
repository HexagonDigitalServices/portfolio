

        {/* Actions */}
       
            {project.links.visit && (
              <a
                href={project.links.visit}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className={s.visitButton}
              >
                Visit
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className={s.otherButton}
              >
                GitHub
              </a>
            )}
            {project.links.pypi && (
              <a
                href={project.links.pypi}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className={s.otherButton}
              >
                PyPI
              </a>
            )}
            {project.links.link && (
              <a
                href={project.links.link}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className={s.otherButton}
              >
                Link
              </a>
            )}
         

