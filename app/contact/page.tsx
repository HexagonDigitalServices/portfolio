 <a
              href="mailto:hexagosservices@gmail.com"
              className={contactPageStyles.contactCard}
            >
              <div className={contactPageStyles.contactIconContainer}>
                <svg
                  className={contactPageStyles.contactIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <p className={contactPageStyles.contactLabel}>Email</p>
                <p className={contactPageStyles.contactValue}>
                  hello@Viratk.ai
                </p>
              </div>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={contactPageStyles.contactCard}
            >
              <div className={contactPageStyles.contactIconContainer}>
                <svg
                  className={contactPageStyles.contactIcon}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div>
                <p className={contactPageStyles.contactLabel}>Twitter</p>
                <p className={contactPageStyles.contactValue}>@Viratk</p>
              </div>
            </a>


     {/* Name Field */}
              <div className={contactPageStyles.formFieldContainer}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={contactPageStyles.formInput}
                  placeholder="John Doe"
                  required
                />
                <label htmlFor="name" className={getLabelClass("name")}>
                  Name
                </label>
              </div>

              {/* Email Field */}
              <div className={contactPageStyles.formFieldContainer}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className={contactPageStyles.formInput}
                  placeholder="john@example.com"
                  required
                />
                <label htmlFor="email" className={getLabelClass("email")}>
                  Email
                </label>
              </div>
            </div>

            {/* Subject Field */}
            <div className={contactPageStyles.formFieldContainer}>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused(null)}
                className={contactPageStyles.formInput}
                placeholder="Project Collaboration"
                required
              />
              <label htmlFor="subject" className={getLabelClass("subject")}>
                Subject
              </label>
            </div>

            {/* Message Field */}
            <div className={contactPageStyles.formFieldContainer}>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                rows={6}
                className={contactPageStyles.formTextarea}
                placeholder="Tell me about your project..."
                required
              />
              <label htmlFor="message" className={getLabelClass("message")}>
                Message
              </label>
            </div>



  <svg
                    className={contactPageStyles.submitButtonIcon}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>