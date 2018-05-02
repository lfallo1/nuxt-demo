export default function ({ store, route, redirect }) {
  // If the user is not authenticated
  if (!store.state.auth) {
    return redirect('/login')
  }

  /**
   * example of work around - to passing arguments to middleware
   * store.state.auth.user_details.authorities.map(function(d){return d.authority}).indexOf(route.meta[0].role) < 0
   */

}
