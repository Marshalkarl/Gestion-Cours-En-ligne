class UserController extends Controller
{
    public function index()
    {
        $utilisateurs = User::all();
        return response()->json($utilisateurs);
    }
}

