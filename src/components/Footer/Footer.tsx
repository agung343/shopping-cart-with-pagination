import classes from "./Fotter.module.scss"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return(
        <footer className={classes.footer} data-cy="footer">
            <ul>
                <li className={classes.links}>
                    <a href="" target="_blank" rel="noopener noreferrer" data-cy="githubLink">
                        github
                    </a>
                </li>
                <li className={classes.copyright}>
                    © {currentYear}. All rights reserved
                </li>
            </ul>
        </footer>
    )
}