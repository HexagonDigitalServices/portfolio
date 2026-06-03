{project.links.visit && (
                <Link
                  href={project.links.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.visitButton}
                >
                  <ExternalLink className={s.buttonIcon} />
                  Visit Live
                </Link>
              )}
              {project.links.howIBuilt && (
                <Link
                  href={project.links.howIBuilt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.secondaryButton}
                >
                  <Youtube className={s.buttonIcon} />
                  How I Built
                </Link>
              )}





                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkCard}
                  >
                    <Github className={s.linkIcon} />
                    <span className={s.linkText}>View Source Code</span>
                  </a>
                )}
                {project.links.visit && (
                  <a
                    href={project.links.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkCard}
                  >
                    <ExternalLink className={s.linkIcon} />
                    <span className={s.linkText}>Live Demo</span>
                  </a>
                )}
                {project.links.pypi && (
                  <a
                    href={project.links.pypi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkCard}
                  >
                    <Package className={s.linkIcon} />
                    <span className={s.linkText}>PyPI Package</span>
                  </a>
                )}
                {project.links.youtube && (
                  <a
                    href={project.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkCard}
                  >
                    <Youtube className={s.linkIcon} />
                    <span className={s.linkText}>Video Tutorial</span>
                  </a>
                )}